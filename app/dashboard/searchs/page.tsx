import styles from "/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from 'next/link';
const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <Search placeholder="Search for a user..." />
            <Link href="/dashboard/users/add">
                <button className={styles.addButton}>Add new</button>
            </Link>
            <table className={styles.table}></table>
        </div>
    )
}

export default UsersPage