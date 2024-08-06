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
      campo: 'Campo 1',
      lote: 'Lote 1',
      muestreo: 'Muestreo 1',
      fecha: '31/07/2024',
      estado: 'Finalizado',
    },
    {
      campo: 'Campo 2',
      lote: 'Lote 2',
      muestreo: 'Muestreo 2',
      fecha: '30/07/2024',
      estado: 'Incompleto',
    },
    {
      campo: 'Campo 3',
      lote: 'Lote 3',
      muestreo: 'Muestreo 3',
      fecha: '29/07/2024',
      estado: 'Sin datos',
    },
  ];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className="border-primary">
        <TableRow>
          <TableHead>Campo</TableHead>
          <TableHead>Lote</TableHead>
          <TableHead>Nombre del muestreo</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TABLE_DATA.map((data, index) => {
          const isEven = index % 2 === 0;

          return (
            <TableRow key={index} className={`${isEven ? '' : 'bg-primary/5'}`}>
              <TableCell>{data.campo}</TableCell>
              <TableCell>{data.lote}</TableCell>
              <TableCell>{data.muestreo}</TableCell>
              <TableCell>{data.fecha}</TableCell>
              <TableCell>{data.estado}</TableCell>
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
