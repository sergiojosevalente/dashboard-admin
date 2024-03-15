import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.png" alt="" fill></Image>
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="John Doe" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="" />
                    <label>Stock</label>
                    <input type="stock" name="stock"  placeholder="123"/>
                    <label>Color</label>
                    <input type="text" name="color" placeholder="red" />
                    <label>Size</label>
                    <input type="text" name="size" placeholder="red" />
                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="technology">Technology</option>
                    </select>
                    <label>Description</label>
                    <textarea name="description" placeholder="description" />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage