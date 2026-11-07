"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "@phosphor-icons/react";
import { landscape } from "@/content/landscape";

export function LandscapeFaq() {
  return (
    <Accordion.Root type="single" collapsible defaultValue="landscape-faq-0" className="border-t border-line">
      {landscape.faq.items.map((item, index) => (
        <Accordion.Item key={item.question} value={`landscape-faq-${index}`} className="border-b border-line">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left">
              <h3 className="font-heading text-lg font-semibold lg:text-xl">{item.question}</h3>
              <Plus size={18} aria-hidden="true" className="shrink-0 text-brand group-data-[state=open]:hidden" />
              <Minus size={18} aria-hidden="true" className="hidden shrink-0 text-brand group-data-[state=open]:block" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 pr-8 text-ink-soft">{item.answer}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
