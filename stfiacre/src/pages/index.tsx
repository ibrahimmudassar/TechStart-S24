import React from "react";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DefaultLayout from "@/layouts/default";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import useSWR from "swr";
import { Link } from "@nextui-org/link";

export default function IndexPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:5000/get_hospitals",
    fetcher,
    { fallbackData: [{ name: "yo" }] }
  );
  const [isOpen, setIsOpen] = React.useState(false);

  const words = [
    {
      text: "Stop",
    },
    {
      text: "overpaying",
    },
    {
      text: "with",
    },
    // {
    //   text: "with",
    // },
    {
      text: "TrueBill.",
      className: "text-text-scarlet dark:text-scarlet",
    },
  ];

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex justify-around md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full ">
          <Autocomplete
            defaultItems={data}
            label="Search a Hospital"
            placeholder="Hospital"
            className="max-w-xs"
          >
            {data.map((item, i) => (
              <AutocompleteItem
                key={item.name}
                as={Link}
                href={`/hospitals/` + item.link}
              >
                {item.name}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
      </div>
      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section> */}
    </DefaultLayout>
  );
}
