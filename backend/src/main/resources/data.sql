-- show databases;

-- 변호사 분야
-- (공법, 민사법, 형사법, 국제법, 국제거래법,
-- 노동법, 조세법, 지적재산권법, 경제법, 환경법)

-- drop table IF EXISTS lawyers;


INSERT INTO lawyers (username, email, password, name, phone, birth, lawyer_no, belong, address, belong_phone, law, visit_cost, phone_cost, video_cost, university, major, auth, premium) VALUES ('lawyer1', 'yangdonggyoo@example.com', 'password123', '양동규', '01012345678', '1972', '1111-2222', '서울법무법인', '서울', '02-1234-5678',  '민사법, 형사법', '3000', '1500', '2000', '고려대', '법학과', true, false);
INSERT INTO lawyers (username, email, password, name, phone, birth, lawyer_no, belong, address, belong_phone, law, visit_cost, phone_cost, video_cost, university, major, auth, premium) VALUES ('lawyer2', 'kimhohyun@example.com', 'password123', '김호현', '01012345678', '1978', '1111-3333', '법무법인 정의', '경기', '031-1234-5678',  '공법, 국제법', '3000', '1500', '2000', '연세대', '법학과', false, true);
INSERT INTO lawyers (username, email, password, name, phone, birth, lawyer_no, belong, address, belong_phone, law, visit_cost, phone_cost, video_cost, university, major, auth, premium) VALUES ('lawyer3', 'kimsion@example.com', 'password123', '김시온', '01012345678', '1984', '1111-4444', '법무법인 한빛', '부산', '051-1234-5678',  '국제거래법, 노동법', '3000', '1500', '2000', '부산대', '법학과', true, false);
INSERT INTO lawyers (username, email, password, name, phone, birth, lawyer_no, belong, address, belong_phone, law, visit_cost, phone_cost, video_cost, university, major, auth, premium) VALUES ('lawyer4', 'parkjooha@example.com', 'password123', '박주하', '01012345678', '1990', '1111-5555', '법무법인 태평', '대구', '053-1234-5678',  '조세법, 지적재산권법', '3000', '1500', '2000', '경북대', '법학과', false, true);
INSERT INTO lawyers (username, email, password, name, phone, birth, lawyer_no, belong, address, belong_phone, law, visit_cost, phone_cost, video_cost, university, major, auth, premium) VALUES ('lawyer5', 'leegeonwoo@example.com', 'password123', '김호주', '01012345678', '1994', '1111-6666', '법무법인 한울', '광주', '062-1234-5678',  '경제법, 환경법', '3000', '1500', '2000', '전남대', '법학과', true, false);





