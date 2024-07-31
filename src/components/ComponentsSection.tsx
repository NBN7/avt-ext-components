// remove this file when you start working on the project

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TIMELINE_ITEMS = [
  {
    title: "First item",
    description: "This is the first item of the timeline",
  },
  {
    title: "Second item",
    description: "This is the second item of the timeline",
  },
  {
    title: "Third item",
    description: "This is the third item of the timeline",
  },
];

export const ComponentsSection = () => {
  return (
    <div className="mt-8 flex min-h-screen w-full flex-col gap-6 rounded-lg bg-white p-4 text-black">
      <Input
        id="input-example"
        className="md:w-1/3"
        placeholder="Placeholder example"
      />

      <Textarea
        id="textarea-example"
        className="md:w-1/3"
        placeholder="Placeholder example"
      />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex w-full items-center gap-12">
        <p>Example option</p>
        <Switch id="switch-example" />
      </div>

      <div className="flex items-center gap-4">
        <Checkbox id="checkbox-example" />
        <Label htmlFor="checkbox-example">Example checkbox</Label>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="md:w-40">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Example title</DialogTitle>
            <DialogDescription>
              This is an example description for the dialog of auravant
              extensions.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Separator />

      <div className="flex gap-2">
        <Badge variant="success">Success</Badge>
        <Badge variant="destructive">Error</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>

      <Timeline items={TIMELINE_ITEMS} />

      <Card className="sm:w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="md:w-40">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Example</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
