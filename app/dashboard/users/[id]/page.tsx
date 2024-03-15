import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
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
                    <label>Username</label>
                    <input type="text" name="username" placeholder="John Doe" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="John@gmail.com" />
                    <label>password</label>
                    <input type="password" name="password"  />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder="+67074747474" />
                    <label>address</label>
                    <textarea name="address" placeholder="New York" />
                    <label>Is Admin ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label>Is Active ?</label>
                    <select name="isActive  " id="isActive    ">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage