export interface Task{
    title: string;
    description: string;
    done: boolean;
    _id: string;
    esfuerzo: number;
    fecha_creacion: Date;
    category: string;
}