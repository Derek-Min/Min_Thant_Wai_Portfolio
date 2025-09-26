// src/pages/AccordionDemo.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Accordion Demo</h1>
      <Accordion type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="one">
          <AccordionTrigger>Section One</AccordionTrigger>
          <AccordionContent>Content for section one.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="two">
          <AccordionTrigger>Section Two</AccordionTrigger>
          <AccordionContent>More content for section two.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
