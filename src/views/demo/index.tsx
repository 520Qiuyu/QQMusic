import { Modal } from "antd";
import { forwardRef, type ForwardedRef } from "react";
import { useVisible } from "../../hooks";
import type { Ref } from "../../hooks/useVisible";

const Demo = forwardRef((props, ref: ForwardedRef<Ref>) => {
  const { visible, open, close } = useVisible({}, ref);

  return (
    <Modal
      title="demo"
      open={visible}
      onCancel={close}
      footer={null}
      centered
    >
      {/* 在这里添加demo的具体内容 */}
    </Modal>
  );
});

export default Demo;
