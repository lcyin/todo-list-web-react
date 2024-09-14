import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { transactionCategoryStyles } from "@/constants";

interface TodoListProps {
  items: { id: number; title: string; completed: boolean }[];
}

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { backgroundColor, borderColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[
      category === "Yes" ? "Success" : "Food and Drink"
    ];
  transactionCategoryStyles.default;
  return (
    <div className={cn("category-badge", borderColor, chipBackgroundColor)}>
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={(cn("text-[12px] font-medium"), textColor)}>{category}</p>
    </div>
  );
};

const TodoListTable = ({ items }: TodoListProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">No.</TableHead>
          <TableHead className="px-2">Title</TableHead>
          <TableHead className="px-2">Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.id}
            className={`${
              item.completed ? "bg-[#F6FEF9]" : "bg-[#FFFBFA]"
            } !over:bg-none !border-b-DEFAULT`}
          >
            <TableCell className="max-w-[250px] pl-2 pr-10">
              {item.id}
            </TableCell>
            <TableCell className="max-w-[250px] pl-2 pr-10">
              <div className="flex items-center gap-3">
                <h1 className="text-14 truncate font-semibold text-[#344054]">
                  {item.title}
                </h1>
              </div>
            </TableCell>
            <TableCell className="pl-2 pr-10">
              <CategoryBadge category={item.completed ? "Yes" : "No"} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoListTable;
