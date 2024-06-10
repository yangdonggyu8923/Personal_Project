-- show databases;
drop table IF EXISTS lawyers;

CREATE TABLE lawyers (
                         id BIGINT AUTO_INCREMENT PRIMARY KEY,
                         username VARCHAR(50) NOT NULL,
                         password VARCHAR(100) NOT NULL,
                         name VARCHAR(100) NOT NULL,
                         phone VARCHAR(20) NOT NULL,
                         law VARCHAR(255) NOT NULL,
                         lawyerNo VARCHAR(50),
                         token VARCHAR(255),
                         office VARCHAR(100),
                         address VARCHAR(255)
);

-- 1번 변호사
INSERT INTO lawyers (id, username, password, name, phone, law, lawyerNo, token, office, address)
VALUES (1, 'dmcclure0', 'pO2(eO73)%@', '김호주', '010-1111-2222', '형사법, 이혼', '8888-9999', '', '서울법률사무소', '서울');

-- 2번 변호사
INSERT INTO lawyers (id, username, password, name, phone, law, lawyerNo, token, office, address)
VALUES (2, 'jdoe', 'sEcReT123$', '김호현', '010-2222-3333', '민사법, 노동법, 지적재산권', '1234-5678', '', '', '');

-- 3번 변호사
INSERT INTO lawyers (id, username, password, name, phone, law, lawyerNo, token, office, address)
VALUES (3, 'sjones', 'aB1@cdEf', '양동규', '010-3333-4444', '부동산, 환경법', '2345-6789', '', '서울법률사무소', '');

-- 4번 변호사
INSERT INTO lawyers (id, username, password, name, phone, law, lawyerNo, token, office, address)
VALUES (4, 'mbrown', 'Pass!word45', '박주하', '010-4444-5555', '형사법, 상사법, 가사법, 의료', '3456-7890', '', '', '부산');

-- 5번 변호사
INSERT INTO lawyers (id, username, password, name, phone, law, lawyerNo, token, office, address)
VALUES (5, 'tjones', 'Qwerty@123', '김시온', '010-5555-6666', '민사법', '4567-8901', '', '해운대법률사무소', '부산 해운대구');





