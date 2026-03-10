import styles from "./Modal.module.css";

export default function Modal({ user, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <button className={styles.close} onClick={onClose}>✕</button>

        <div
          className={styles.avatar}
          style={{ background: `hsl(${(user.name.charCodeAt(0) * 17) % 360}, 55%, 58%)` }}
        >
          {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
        </div>

        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.username}>@{user.username}</p>

        <div className={styles.divider} />

        <div className={styles.grid}>
          <div className={styles.item}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{user.email}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>{user.phone}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Website</span>
            <span className={styles.value}>{user.website}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>City</span>
            <span className={styles.value}>{user.address.city}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Company</span>
            <span className={styles.value}>{user.company.name}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Catchphrase</span>
            <span className={styles.value}>"{user.company.catchPhrase}"</span>
          </div>
        </div>

      </div>
    </div>
  );
}