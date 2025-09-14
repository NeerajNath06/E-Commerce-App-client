export type Product = {
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    type: string;
    brand: string;
    imageUrl: string;
    uniqueId: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date,
    updatedBy: string,
    isDeleted: boolean;
}