import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export const CardExample = () => {
  return (
    <Card className="sm:w-[350px]">
      <CardHeader>
        <CardTitle>Web Development</CardTitle>
        <CardDescription>
          Stay ahead with the latest in web development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">
          Dive into the latest trends in web development and enhance your skills
          with cutting-edge technologies.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  );
};
