import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NestedForm } from "@/lib/nested-form";
import { FC } from "react";
import { AddSplitType } from "./schema";
interface AddSplitFormProps {
    form: NestedForm<AddSplitType>;
}
export const AddSplitForm: FC<AddSplitFormProps> = (props) => {
    const { form } = props;
    const { control, path } = form;
    return (
        <div className="grid grid-cols-1 gap-3">
            <Form {...form}>
                <FormField
                    control={control}
                    name={path("name")}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Название Сплит-теста</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                                Название Сплит-теста, например Листовка к
                                экоакции 07.07.24 или Стикер Артём 08.08.2024
                            </FormDescription>
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    );
};
