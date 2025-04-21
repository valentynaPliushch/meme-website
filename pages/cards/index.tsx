"use client";
import { useEffect, useState } from "react";
import { Image, Card, CardHeader, CardBody, Link } from "@heroui/react";
import { initialMemes, Meme } from "@/data/memes";
import { loadMemes } from "@/utils/storage";
import DefaultLayout from "@/layouts/default";
import { HeartIcon } from "@/components/HeartIcon";

export default function CardView() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = loadMemes();
    setMemes(stored ?? initialMemes);
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {memes.map((meme) => (
          <Card key={meme.id} className="flex items-start">
            <CardHeader>
              <h3 className="text-lg font-bold">{meme.title}</h3>
            </CardHeader>
            <CardBody>
              <Image
                src={meme.image}
                alt={meme.title}
                className="rounded-t-lg"
                width={300}
              />
              <div className="flex justify-between p-4 space-y-2">
                <div className="flex justify-center items-center gap-2">
                  <HeartIcon />
                  <p>{meme.likes}</p>
                </div>
                <Link isExternal href={meme.image}>
                  View Image
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </DefaultLayout>
  );
}
