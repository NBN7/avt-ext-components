import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { EllipsisVertical } from 'lucide-react';

export const TableExample = () => {
  const TABLE_DATA = [
    {
      field: 'Field 1',
      lote: 'Lote 1',
      sampling: 'Sampling 1',
      date: '31/07/2024',
      status: 'Finished',
    },
    {
      field: 'Field 2',
      lote: 'Lote 2',
      sampling: 'Sampling 2',
      date: '30/07/2024',
      status: 'Incomplete',
    },
    {
      field: 'Field 3',
      lote: 'Lote 3',
      sampling: 'Sampling 3',
      date: '29/07/2024',
      status: 'No data',
    },
  ];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className="border-primary">
        <TableRow>
          <TableHead>Field</TableHead>
          <TableHead>Lote</TableHead>
          <TableHead>Sampling</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TABLE_DATA.map((data, index) => {
          const isEven = index % 2 === 0;

          return (
            <TableRow key={index} className={`${isEven ? '' : 'bg-primary/5'}`}>
              <TableCell>{data.field}</TableCell>
              <TableCell>{data.lote}</TableCell>
              <TableCell>{data.sampling}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>
                <Button variant="ghost" className="size-8 p-0">
                  <EllipsisVertical className="size-4 cursor-pointer text-primary" />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
