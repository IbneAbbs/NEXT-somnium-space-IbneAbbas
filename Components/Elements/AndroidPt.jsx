import React from "react";
import styles from "../../styles/Android.module.scss";
const AndroidPt = () => {
  return (
    <>
      <section className={styles.android}>
        <div className={styles.container}>
          {/* <ul>
            <li>
              <img src="assets/android.png" alt="" width={120} />
            </li>
            <li>
              <img src="assets/mrtv.png" alt="" width={120} />
            </li>
            <li><img src="assets/zoomin.png" alt="" width={120}/></li>
            <li><img src="assets/venture.png" alt="" width={120}/></li>
            <li><img src="assets/focus.png" alt="" width={120}/></li>
            <li><img src="assets/road.png" alt="" width={120}/></li>
            <li><img src="assets/pcgamer.png" alt="" width={120}/></li>
            <li><img src="assets/coin.png" alt="" width={120}/></li>
            <li><img src="assets/forbes.png" alt="" width={120}/></li>
          </ul> */}
          <div className="row d-flex align-item-center justify-content-around">
            <div className="col-md-1">
                <div className={styles.images}>
                <img src="assets/android.png" alt="" width={120}/>
                </div>
            </div>
            <div className="col-md-1">
              <img src="assets/mrtv.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/zoomin.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/venture.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/focus.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/road.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/pcgamer.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/coin.png" alt="" width={120}/>
            </div>
            <div className="col-md-1">
              <img src="assets/forbes.png" alt="" width={120}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AndroidPt;
