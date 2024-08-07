import { useGetSplitDetailQuery, useGetSplitListQuery } from "@/api/Splits";
import { AddGroupButton } from "@/components/atoms/add-group-button";
import { DeleteGroupButton } from "@/components/atoms/delete-group-button";
import { EditGroupButton } from "@/components/atoms/edit-group-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { getImageUrl } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const SplitPage = () => {
    const { id } = useParams({
        from: "/_layout/admin/front/splits/$id",
    });

    const { data, isSuccess } = useGetSplitDetailQuery(parseInt(id));
    const { data: splits } = useGetSplitListQuery();
    if (isSuccess) {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between flex-wrap gap-2">
                    <div className="flex gap-2 items-center">
                        <Link to="/admin/front/splits">
                            <Button size={"icon"} variant={"outline"}>
                                <ChevronLeft />
                            </Button>
                        </Link>

                        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                            {
                                splits?.filter(
                                    (split) => split.id == parseInt(id)
                                )[0].name
                            }{" "}
                            #
                            {
                                splits?.filter(
                                    (split) => split.id == parseInt(id)
                                )[0].id
                            }
                        </h1>
                    </div>

                    <div className="flex gap-2">
                        <AddGroupButton split_id={parseInt(id)} />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {data.map((group) => {
                        const {
                            qr_url,
                            name,
                            redirect,
                            admin_total,
                            admin_uniq,
                            user_uniq,
                            id,
                            size,
                            user_total,

                            redirect_url,
                        } = group;
                        return (
                            <Card key={id} className="relative">
                                <CardHeader className="flex-row items-baseline gap-2 flex-wrap">
                                    <CardTitle className="text-xl">
                                        #{id} {name}
                                    </CardTitle>
                                    <Badge>Всего: {size}</Badge>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-2 md:flex-nowrap flex-wrap items-start">
                                        <div className="flex flex-col">
                                            <img src={getImageUrl(qr_url)} />
                                            <a
                                                href={redirect_url}
                                                target="_blank"
                                                className="w-full"
                                            >
                                                <Button
                                                    variant={"outline"}
                                                    className="w-full mt-4"
                                                >
                                                    {redirect_url}
                                                </Button>
                                            </a>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2 w-full">
                                            <div className="flex gap-2 ">
                                                <p>
                                                    Переходы уникальные (всего)
                                                </p>
                                                <div>
                                                    <Badge>
                                                        {user_uniq} (
                                                        {user_total})
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <p>
                                                    Переходы админа уникальные
                                                    (всего):
                                                </p>
                                                <div>
                                                    <Badge>
                                                        {admin_uniq} (
                                                        {admin_total})
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <p className="min-w-max">
                                                    Редиректим пользователей на:
                                                </p>
                                                <div className="w-full">
                                                    <a
                                                        href={redirect}
                                                        target="_blank"
                                                        className="w-full"
                                                    >
                                                        <Button
                                                            variant={"outline"}
                                                            className="w-full"
                                                        >
                                                            {redirect}
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <div className="flex gap-2 flex-wrap absolute right-2 top-2">
                                    <DeleteGroupButton groupId={id} />
                                    <EditGroupButton group={group} />
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }
    return <></>;
};
