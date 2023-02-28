import { Modal } from "react-bootstrap";

import styles from "../styles/Home.module.css";

export default function BiliPlayerModal({
  show,
  onHide,
  BVID,
  modalPlayerSongName,
}) {
  return (
    <Modal show={show} onHide={onHide} fullscreen="xl-down" size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{modalPlayerSongName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.biliPlayerDiv}>
          <iframe
            src={"//player.bilibili.com/player.html?bvid=" + BVID}
            height="100%"
            width="100%"
            scrolling="no"
            border="0"
            frameBorder="no"
            allowFullScreen={true}
          >
            {" "}
          </iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
}
