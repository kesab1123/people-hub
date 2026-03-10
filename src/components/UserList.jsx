import { useState, useEffect } from "react";
import { userService } from "../services/userService";
import UserCard from "./UserCard";
import Modal from "./Modal";
import styles from "./UserList.module.css";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    userService
      .getUsers()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <p className={styles.eyebrow}>People Hub</p>
        <h1 className={styles.title}>Our Directory</h1>
        <div className={styles.accent} />
        {!loading && !error && (
          <p className={styles.subtitle}>
            {users.length} members · click any card to view details
          </p>
        )}
      </header>

      {loading && (
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.skeleton}>
              <div className={`${styles.skCircle} ${styles.shimmer}`} />
              <div className={`${styles.skLine} ${styles.shimmer}`} style={{ width: "60%" }} />
              <div className={`${styles.skLine} ${styles.shimmer}`} style={{ width: "80%" }} />
            </div>
          ))}
        </div>
      )}

      {error && <p className={styles.error}>⚠ {error}</p>}

      {!loading && !error && (
        <div className={styles.grid}>
          {users.map((user, i) => (
            <UserCard
              key={user.id}
              user={user}
              index={i}
              onClick={() => setSelected(user)}
            />
          ))}
        </div>
      )}

      {selected && (
        <Modal user={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}