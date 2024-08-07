export interface CreateGroupRequest {
    split_id: number;
    name: string;
    redirect: string;
    size: number;
}

export interface EditGroupRequest {
    split_id?: number;
    name?: string;
    redirect?: string;
    size?: number;
}

