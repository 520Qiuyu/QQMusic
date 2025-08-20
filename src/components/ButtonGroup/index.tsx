import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useCompRef } from "../../hooks";
import Demo from "../../views/demo";
import styles from "./index.module.scss";
import TestModal from "../../views/testModal";

const ButtonGroup = () => {
  // 云盘快速上传
  const demoRef = useCompRef(Demo);
  const handleDemo = () => {
    demoRef.current.open();
  };

  // testModal
  const testModalRef = useCompRef(TestModal);
  const handleTestModal = () => {
    testModalRef.current.open();
  };

  return (
    <div className={styles["button-group"]}>
      {/* demo */}
      <Tooltip
        title={"demo"}
        placement="left"
      >
        <Button
          type="primary"
          icon={<InfoCircleOutlined />}
          onClick={handleDemo}
          className={styles["button"]}
        />
      </Tooltip>

      {/* testModal */}
      <Tooltip
        title={"testModal"}
        placement="left"
      >
        <Button
          type="primary"
          icon={<InfoCircleOutlined />}
          onClick={handleTestModal}
          className={styles["button"]}
        />
      </Tooltip>

      {/* 弹窗组件 */}
      <Demo ref={demoRef} />
      {/* testModal */}
      <TestModal ref={testModalRef} />
    </div>
  );
};

export default ButtonGroup;
