import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full">
          <Card
            className="py-4"
            isPressable
            isExternal
            as={Link}
            href="https://www.linkedin.com/in/ibrahim-mudassar/"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">
                CS, Class of &apos;26
              </p>
              <small className="text-default-500">I made this site.</small>
              <h4 className="font-bold text-xl">👋, I&apos;m Ibrahim.</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                isBlurred
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://i.ibb.co/RywZSd3/dccropped.png"
                width={270}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
