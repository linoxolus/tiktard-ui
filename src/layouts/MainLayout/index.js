import classNames from "classnames/bind";
import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
