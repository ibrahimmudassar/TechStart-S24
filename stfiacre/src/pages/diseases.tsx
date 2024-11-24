import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import useSWR from "swr";
import { Spinner } from "@nextui-org/spinner";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

export default function DocsPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:5000/get_hospital_services",
    fetcher
  );

  if (isLoading) {
    return (
      <DefaultLayout>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center h-screen">
            <Spinner color="danger" />
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <Accordion>
            {data.map((item, i) => (
              <AccordionItem
                key={i}
                aria-label={item.name}
                subtitle={`Price: ` + item.price}
                title={item.name}
              >
                <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
                  {item.history.map((ktem, k) => (
                    <ListboxItem key={k} endContent={ktem.price}>
                      {ktem.date}
                    </ListboxItem>
                  ))}
                </Listbox>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </DefaultLayout>
  );
}
