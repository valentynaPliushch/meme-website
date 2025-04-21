"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { initialMemes, Meme } from "@/data/memes";
import { loadMemes, saveMemes } from "@/utils/storage";
import { EditIcon } from "@/components/EditIcon";
import DefaultLayout from "@/layouts/default";

export default function TableView() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [editingMeme, setEditingMeme] = useState<Meme | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imageError, setImageError] = useState(false);

  const columns = [
    {
      key: "id",
      label: "Id",
    },
    {
      key: "title",
      label: "Title",
    },
    {
      key: "image",
      label: "Image Url",
    },
    {
      key: "likes",
      label: "Likes",
    },
    {
      key: "actions",
      label: "Actions",
    },
  ];

  useEffect(() => {
    const stored = loadMemes();
    if (stored && stored.length > 0) {
      setMemes(stored);
    } else {
      setMemes(initialMemes);
      saveMemes(initialMemes);
    }
  }, []);

  useEffect(() => {
    saveMemes(memes);
  }, [memes]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Meme
  ) => {
    if (!editingMeme) return;
    if (field === "image") {
      const regex = /^https?:\/\/.*\.(jpg|jpeg)$/i;
      const isValidUrl = regex.test(e.target.value);
      setImageError(!isValidUrl);
    }
    setEditingMeme({ ...editingMeme, [field]: e.target.value });
  };

  const handleSave = () => {
    if (!editingMeme) return;
    const updatedMemes = memes.map((item) =>
      item.id === editingMeme.id ? editingMeme : item
    );
    setMemes(updatedMemes);
    saveMemes(updatedMemes);
  };

  const editIcon = (item: Meme) => (
    <Button
      isIconOnly
      aria-label="Edit user"
      className="relative flex items-center gap-2"
      onPress={() => {
        onOpen();
        setEditingMeme(item);
      }}
    >
      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
        <EditIcon />
      </span>
    </Button>
  );

  return (
    <DefaultLayout>
      <Table aria-label="Table with memes">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={memes}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "actions"
                    ? editIcon(item)
                    : getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                {editingMeme && (
                  <div className="p-4 space-y-4">
                    <Input
                      label="Id"
                      variant="underlined"
                      value={editingMeme.id.toString()}
                      disabled
                      isReadOnly
                    />
                    <Input
                      label="Title"
                      value={editingMeme.title}
                      onChange={(e) => handleInputChange(e, "title")}
                      minLength={3}
                      maxLength={100}
                      required
                    />
                    <Input
                      label="Image URL"
                      value={editingMeme.image}
                      onChange={(e) => handleInputChange(e, "image")}
                      isInvalid={!!imageError}
                      errorMessage="Enter full paths"
                      required
                    />
                    <Input
                      type="number"
                      label="Likes"
                      classNames={{
                        input: "bg-white cursor-default",
                      }}
                      value={editingMeme.likes.toString()}
                      onChange={(e) => handleInputChange(e, "likes")}
                      required
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  isDisabled={!!imageError}
                  onPress={() => {
                    handleSave();
                    onClose();
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
