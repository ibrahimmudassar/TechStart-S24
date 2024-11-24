import { Navbar } from "@/components/navbar";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function DocsPage() {
  const bills = [
    {
      name: "Bill 1",
      link: "https://drive.google.com/file/d/1BXmyCVzxM1qxE_qdOMKQ9C2Jwprnvmka/view?usp=sharing",
      words: `The Room Charges are standard for this hospital in this time frame.
      The X-Ray is overpriced for this market. This hospital recently charged another patient for the same procedure 2700 vs 5000 they've charged you.
      Drugs/Prescriptions/Injections are standard for this hospital in this time frame.
      The Blood Test is is overpriced for this market. other hospitals price this at 1000 vs the 2500 you were charged.
      Try to get the consultation fee waived. This does not seem like a legitimate charge.`,
    },
    {
      hobby: "Bill 2",
      link: "https://drive.google.com/file/d/1jbMQWLcNpqo0NjxiFe5u_L5KyEcuOzsT/view?usp=drive_link",
      words: `X-Ray is overpriced for this market. This hospital recently charged another patient for the same procedure 2700 vs 5000 they've charged you.
      No info on any of the other charges. Please consult a human for more information on negotiating those charges.`,
    },
    {
      pet: "Bill 3",
      link: "https://drive.google.com/file/d/12Jzf5HtXALe_ogKGaGorTceZw9tygdR_/view?usp=sharing",
      words: `The Room Charges are standard for this hospital in this time frame.
      Drugs/Prescriptions/Injections are standard for this hospital in this time frame.
      The Room Charges are standard for this hospital in this time frame.
      Try to get the consultation fee waived. This does not seem like a legitimate charge.`,
    },
  ];

  const [words, setWords] = React.useState("");

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto max-w-7xl px-6 flex-grow flex flex-col justify-center">
        <div className="flex justify-center">
          <h1 className={title()}>
            <TextGenerateEffect key={words} words={words} />
          </h1>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl flex-grow flex flex-col justify-end pb-2 max-h-[300px]">
        <div className="flex flex-row justify-center font-bold">
          Click document to see parsed:
        </div>
        <div className="flex flex-row justify-center gap-4 px-2">
          {bills.map((item, i) => (
            <Card
              key={i}
              className="pt-2"
              isPressable
              onPress={() => setWords(item.words)}
            >
              <CardHeader className="pb-0 pt-2 flex flex-col sm:flex-row justify-center gap-4">
                <h4 className="font-bold">Bill {i + 1}</h4>
                <Button color="danger" as={Link} href={item.link} isExternal>
                  Read Me
                </Button>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://canto-wp-media.s3.amazonaws.com/app/uploads/2018/09/19195505/document-file-types-5.jpg"
                  width={200}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
