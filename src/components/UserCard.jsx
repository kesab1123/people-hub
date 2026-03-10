import styles from "./UserCard.module.css";

function Avatar({ name }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const hue = (name.charCodeAt(0) * 17) % 360;
  return (
    <div className={styles.avatar} style={{ background: `hsl(${hue}, 55%, 58%)` }}>
      {initials}
    </div>
  );
}

export default function UserCard({ user, index, onClick }) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={onClick}
    >
      <Avatar name={user.name} />
      <div className={styles.name}>{user.name}</div>
      <div className={styles.email}>{user.email}</div>
      <div className={styles.badge}>{user.company.name}</div>
      <div className={styles.hint}>View details →</div>
    </div>
  );
}