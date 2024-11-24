import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { color } from "framer-motion";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="py-4 max-w-72">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large fo">Standard</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex flex-row">
            <h1 className={title({ color: "green" })}>Price:</h1>
            <h1 className="pl-5 text-5xl font-bold">$99.99</h1>
          </CardBody>
        </Card>
        <Card className="py-4 max-w-72">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Other</p>
            <small className="text-default-500">Have other uses?</small>
            <h4 className="font-bold text-large">Call Us</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h1 className="text-2xl">Reach out for a consultation for data</h1>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
}
