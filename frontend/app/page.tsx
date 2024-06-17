'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './HomePage.module.css'; // 스타일 파일을 별도로 관리하는 것을 추천합니다.
import { PG } from './components/common/enums/PG';

const HomePage = () => {
  const router = useRouter();
  
  const navigateToFindLawyer = () => {
    router.push(`${PG.LAWYER}/list`);
  };

  const navigateToCalender = () => {
    router.push(`${PG.LAWYER}/calender`);
  };

  return (
    <>
      {/* <header className={styles.header}>
        <div className={styles.logo}>LawMate</div>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="/">홈</a></li>
            <li><a href="/find-lawyer">변호사 찾기</a></li>
            <li><a href="/contact">문의하기</a></li>
          </ul>
        </nav>
      </header> */}

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1>신뢰할 수 있는 변호사를 찾으세요</h1>
          <p>당신의 법적 문제를 해결해줄 최고의 변호사를 만나보세요</p>
          <button className={styles.primaryButton} onClick={navigateToFindLawyer}>변호사 찾기</button>
          <button className={styles.secondaryButton} onClick={navigateToCalender}>문의하기</button>
        </section>

        <section className={styles.lawyerSection}>
          <h2>대표 변호사</h2>
          <div className={styles.lawyerList}>
            <div className={styles.lawyerCard}>
              <img src="/lawyer1.jpg" alt="Lawyer 1" className={styles.lawyerImage} />
              <h3>김 변호사</h3>
              <p>형사법 전문</p>
            </div>
            <div className={styles.lawyerCard}>
              <img src="/lawyer2.jpg" alt="Lawyer 2" className={styles.lawyerImage} />
              <h3>이 변호사</h3>
              <p>공법 전문</p>
            </div>
            <div className={styles.lawyerCard}>
              <img src="/lawyer3.jpg" alt="Lawyer 3" className={styles.lawyerImage} />
              <h3>박 변호사</h3>
              <p>지적재산권법 전문</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 LawMate. All rights reserved.</p>
        {/* <div className={styles.socialLinks}>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div> */}
      </footer>
    </>
  );
}

export default HomePage;