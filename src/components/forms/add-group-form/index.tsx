import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NestedForm } from "@/lib/nested-form";
import { FC } from "react";
import { AddGroupType } from "./schema";
interface AddGroupFormProps {
    form: NestedForm<AddGroupType>;
}
export const AddGroupForm: FC<AddGroupFormProps> = ({ form }) => {
    const { control, path } = form;

    return (
        <div className="grid grid-cols-1 gap-3">
            <Form {...form}>
                <FormField
                    control={control}
                    name={path("name")}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Название группы</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Название группы"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={path("redirect")}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Ссылка</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Ссылка" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={path("size")}
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Количество</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="number"
                                    placeholder="Количество"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </Form>
        </div>
    );
};
