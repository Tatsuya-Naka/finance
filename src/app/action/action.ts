"use server";

export async function SaveForm(formData: FormData) {
    "use server";
    const receiptImage = formData.get("receiptImage");
    const date = formData.get("date");
    const place = formData.get("place");
    const name = formData.getAll("name");
    const category = formData.getAll("category");
    const amount = formData.getAll("amount");
    const price = formData.getAll("price");
    const comment = formData.get("comment");

    console.log("receiptImage: ", receiptImage);
    console.log("Date: ", date);
    console.log("Place: ", place);
    console.log("Name:", name);
    console.log("Category: ", category);
    console.log("amount: ", amount);
    console.log("Price: ", price);
    console.log("comment: ", comment);
};