import { useDeleteSplitMutation } from "@/api/Splits";
import { Split } from "@/api/Splits/types";
import { AddGroupButton } from "@/components/atoms/add-group-button";
import { EditSplitButton } from "@/components/atoms/edit-split-button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LoadingButton } from "@/components/ui/loading-button";
import { usePrompt } from "@/hooks/use-prompt";
import { themes } from "@/lib/themes";
import { Link } from "@tanstack/react-router";
import { GitFork, Trash2 } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { toast } from "sonner";
const data2 = [
    {
        average: 400,
        today: 240,
    },
    {
        average: 300,
        today: 139,
    },
    {
        average: 200,
        today: 980,
    },
    {
        average: 278,
        today: 390,
    },
    {
        average: 189,
        today: 480,
    },
    {
        average: 239,
        today: 380,
    },
    {
        average: 349,
        today: 430,
    },
];

interface SplitCardProps extends Split {}
export const SplitCard: FC<SplitCardProps> = (props) => {
    const { id, leads_count, name } = props;
    const { theme: mode } = useTheme();
    const prompt = usePrompt();
    const theme = themes.find((theme) => theme.name === "blue");
    const [deleteSplit, { isLoading }] = useDeleteSplitMutation();

    const onDelete = async () => {
        const yes = await prompt({
            title: "Вы уверены что хотите удалить? ",
        });

        if (yes) {
            try {
                await deleteSplit(id).unwrap();
            } catch (error) {
                toast.error("ERROR");
            }
        }
    };
    return (
        <Card className="cursor-pointer">
            <Link
                to={"/admin/$id"}
                params={{
                    id: `${id}`,
                }}
            >
                <CardHeader className="flex flex-row  justify-between space-y-0 pb-2">
                    <div>
                        <CardTitle className="text-lg font-medium">
                            {name}
                        </CardTitle>
                        <CardDescription>#{id}</CardDescription>
                    </div>

                    <GitFork className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <Badge>{leads_count}</Badge>

                    <div className="h-[150px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={data2}
                                margin={{
                                    top: 5,
                                    right: 10,
                                    left: 10,
                                    bottom: 0,
                                }}
                            >
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (
                                            active &&
                                            payload &&
                                            payload.length
                                        ) {
                                            return (
                                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="flex flex-col">
                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Average
                                                            </span>
                                                            <span className="font-bold text-muted-foreground">
                                                                {
                                                                    payload[0]
                                                                        .value
                                                                }
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Today
                                                            </span>
                                                            <span className="font-bold">
                                                                {
                                                                    payload[1]
                                                                        .value
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return null;
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    strokeWidth={2}
                                    dataKey="average"
                                    activeDot={{
                                        r: 6,
                                        style: {
                                            fill: "var(--theme-primary)",
                                            opacity: 0.25,
                                        },
                                    }}
                                    style={
                                        {
                                            stroke: "var(--theme-primary)",
                                            opacity: 0.25,
                                            "--theme-primary": `hsl(${
                                                theme?.cssVars[
                                                    mode === "dark"
                                                        ? "dark"
                                                        : "light"
                                                ].primary
                                            })`,
                                        } as React.CSSProperties
                                    }
                                />
                                <Line
                                    type="monotone"
                                    dataKey="today"
                                    strokeWidth={2}
                                    activeDot={{
                                        r: 8,
                                        style: { fill: "var(--theme-primary)" },
                                    }}
                                    style={
                                        {
                                            stroke: "var(--theme-primary)",
                                            "--theme-primary": `hsl(${
                                                theme?.cssVars[
                                                    mode === "dark"
                                                        ? "dark"
                                                        : "light"
                                                ].primary
                                            })`,
                                        } as React.CSSProperties
                                    }
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Link>
            <CardFooter className="gap-2">
                <LoadingButton
                    variant={"destructive"}
                    onClick={onDelete}
                    loading={isLoading}
                >
                    <Trash2 />
                    Удалить
                </LoadingButton>
                <EditSplitButton split={props} />
                <AddGroupButton split_id={id} />
            </CardFooter>
        </Card>
    );
};