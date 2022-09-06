import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <main className={styles.main}><div><div>{children}</div></div></main>
    </div>
  );
};

export default Layout;
