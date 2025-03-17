-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2025 at 06:08 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `description` varchar(350) NOT NULL,
  `hero_img` varchar(200) NOT NULL,
  `hero_name` varchar(200) NOT NULL,
  `heroine_img` varchar(200) NOT NULL,
  `heroine_name` varchar(200) NOT NULL,
  `producer_img` varchar(200) NOT NULL,
  `producer_name` varchar(200) NOT NULL,
  `director_img` varchar(200) NOT NULL,
  `director_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `description`, `hero_img`, `hero_name`, `heroine_img`, `heroine_name`, `producer_img`, `producer_name`, `director_img`, `director_name`) VALUES
(1, 'Get ready for RamCharan`s undeniable swag - he`s about to own the screen and slay it like never before!', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523516/ram-charan-teja_hero_gc_yoehv1.jpg', 'Ram Charan', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/kiara-advani-heroine_gc_qecpny.jpg', 'Kiara Advani', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/dil-raju_pro_gc_tmloeb.jpg', 'Dil Raju', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/shankar-shanmugham_dir_gc_iw4ndl.jpg', 'Shankar Shanmugham'),
(2, 'Amaran tells the inspiring story of Major Mukund Varadarajan, an Indian Army officer honoured with the Ashok Chakra for his heroic actions during a counterterrorism operation in Jammu and Kashmir. The film also highlights the unwavering love and sacrifice of his wife, Indhu Rebecca Varghese, serving as a heartfelt tribute to the courage of soldiers', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/sivakarthikeyan_hero_am_wttzfx.jpg', 'SivaKarthikeyan', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/sai-pallavi_heroine_am_zlwj0f.jpg', 'Sai Pallavi', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/kamal-haasan_pro_am_i65dii.jpg', 'Kamal Haasan', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523515/rajkumar-periasamy_dir_am_hqp7qu.jpg', 'Rajkumar periasamy'),
(3, 'A long-lost letter must find its way to the recipient twenty years later. A rabble-rouser learns a lesson in humility and love along the way.', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523560/dulquer-salmaan_sr_lvczgi.jpg', 'Dulquer Salmaan', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523560/mrunal-thakur-_sr_vtfuh1.jpg', 'Mrunal thakur', 'https://res.cloudinary.com/deiezfpey/image/upload/v1738560496/jvpzkgdarvamvunffhuo.jpg', 'Priyanka Dutt', 'https://res.cloudinary.com/deiezfpey/image/upload/v1738560496/by1il5mflrymmqccyctk.jpg', 'Hanu Raghavapudi'),
(4, 'The extraordinary tale of Lucky Bhaskar, a common man, who turns into a shrewd banker to make his ends meet.', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523560/dulquer-salmaan_sr_lvczgi.jpg', 'Dulquer Salmaan', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523517/meenakshi-chaudhary_heroine_lb_xwlspx.jpg', 'Meenakshi Chaudhary', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523517/s-naga-vamsi_pro_lb_jnokb4.jpg', 'Naga Vamsi', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523517/venkee-atluri_dir_lb_jf2dwm.jpg', 'Venky Atluri'),
(5, 'A triangular crime comedy promising laughter and thrills, hitting cinemas this Sankranthi 2025 for the perfect festive entertainment!', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523565/venkatesh_sv_tcfqxw.jpg', 'Daggubati Venkatesh', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523565/aishwarya-rajesh_sv_ysbd2r.jpg', 'Aishwarya Rajesh', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523564/shirish_pro_sv_l6tzqy.jpg', 'Shirish', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523564/anil-ravipudi_dir_sv_x3nlkv.jpg', 'Anil Ravipudi'),
(6, 'Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri.', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523514/teja-sajji_hero_h_jt7zbt.jpg', 'Teja Sajja', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523514/amritha-aiyer_herione_h_mvh2bv.jpg', 'Amritha Aiyer', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523514/k-niranjan-reddy_pro_h_bdcz7s.jpg', ' K.Niranjan Reddy', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523514/prasanth-varma_dir_h_jwx5p1.jpg', 'Prashanth Varma'),
(7, 'This is the story of a son whose love for his father knows no bounds. As their bond begins to fracture, a chain of extraordinary events unfold causing the son to undergo a remarkable transformation consumed by a thirst for vengeance.', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523561/ranbir-kapoor_A_fgvqot.jpg', 'Ranbir Kapoor', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523562/rashmika-mandanna_p_wgbi4z.jpg', 'Rashmika Mandanna', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523561/bhushan-kumar_PRO_A_k3tcaw.jpg', 'Bhushan Kumar', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523561/sandeep-reddy-vanga_dir_A_nqg1dc.jpg', 'Sandeep Reddy Vanga'),
(8, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523561/sandeep-reddy-vanga_dir_A_nqg1dc.jpg', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523564/nandamuri-balakrishna_hero_dm_y1u37p.jpg', ' Nandamuri Balakrishna', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523563/urvashi-rautela_heroine_dm_ayya5a.jpg', 'Urvashi Rautela', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523563/s-naga-vamsi_pro_dm_yn7x5b.jpg', ' Suryadevara Naga Vamsi', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523562/bobby-kolli_dir_dm_hjekbs.jpg', 'Bobby Kolli'),
(9, 'Komurayya is an old man who lives with his son Ailayya and grandson Saayilu. The grandson is in a lot of debt and decides to get married to clear the debts with the dowry. Things change when Komurayya`s passes away three days before his engagement. His family comes to town for the last rites but fail to satisfy Komurayya`s soul. Could his family me', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523514/priyadarshi-pulikonda_hero_b_gsiqky.jpg', 'Priyadarshi Pulikonda', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523514/kavya-kalyanram_heroine_b_r4viqf.jpg', 'Kavya Kalyanram', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523496/harshith-reddy_pro_b_dojamc.jpg', 'Harshith Reddy', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523513/venu-yeldandi-dir_b_rcyhgn.jpg', 'Venu Yeldandi'),
(10, 'Pushpa 2: The Rule picks up from the explosive events of the first part, following Pushpa`s meteoric rise as he expands his red sandalwood empire beyond borders. As tensions escalate with rival factions and the authorities, his growing ambitions draw him into intense confrontations and political upheavals.', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523562/allu-arjun_p_zrvclz.jpg', 'Allu Arjun', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523562/rashmika-mandanna_p_wgbi4z.jpg', 'Rashmika Mandanna', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523561/naveen-yerneni_pro_p_v3ixry.jpg', 'Naveen Yerneni', 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523561/sukumar-bandreddi_dir_p_yvnk1m.jpg', 'Sukumar Bandreddi');

-- --------------------------------------------------------

--
-- Table structure for table `posters`
--

CREATE TABLE `posters` (
  `id` int(11) NOT NULL,
  `img_url` varchar(250) NOT NULL,
  `movie_name` varchar(200) NOT NULL,
  `rating` float NOT NULL,
  `movie_type` varchar(250) NOT NULL,
  `language` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posters`
--

INSERT INTO `posters` (`id`, `img_url`, `movie_name`, `rating`, `movie_type`, `language`) VALUES
(1, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523567/game_changer_r6ztqv.jpg', 'Game Changer', 7.4, 'Action,Drama,Political', 'Telugu,Tamil'),
(2, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523568/amaran_ogjmom.jpg', 'Amaran', 9.4, 'Action,Drama', 'Telugu,Tamil'),
(4, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523567/lucky_bhaskar_cwqzh4.jpg', 'Lucky Baskhar', 9.3, 'Crime,Thriller', 'Telugu,Malayalam'),
(5, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523566/sankranthiki_vastunnam_ty8mtl.jpg', 'Sankranthiki vasthunam', 9, 'Action,Comedy', 'Telugu'),
(6, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523566/hanuman_lgp0yb.jpg', 'Hanuman', 9.4, 'Action,Adventure', 'Telugu,Hindi'),
(7, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523565/Animal_bj4gvw.jpg', 'Animal', 8.2, 'Action,Crime', 'Telugu,Hindi'),
(8, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523564/daaku-maharaaj_ben4gh.jpg', 'Daaku maharaaj', 8.8, 'Action,Drama', 'Telugu'),
(9, 'https://res.cloudinary.com/deiezfpey/image/upload/v1737523516/balagam_lf2baa.jpg', 'Balagam', 9.5, 'Drama', 'Telugu'),
(10, 'https://res.cloudinary.com/deiezfpey/image/upload/v1736404888/sabxhxvjnicjaah3gpm7.avif', 'Pushpa 2', 8.3, 'Action,Thriller', 'Telugu,Hindi'),
(11, 'https://res.cloudinary.com/deiezfpey/image/upload/v1739337149/hfqbobcwa3gnmkptmajy.jpg', 'Naruto ', 9.7, 'Action, Fantasy', 'English');

-- --------------------------------------------------------

--
-- Table structure for table `trailer`
--

CREATE TABLE `trailer` (
  `id` int(11) NOT NULL,
  `url` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trailer`
--

INSERT INTO `trailer` (`id`, `url`) VALUES
(1, 'https://www.youtube.com/watch?v=zHiKFSBO_JE'),
(2, 'https://www.youtube.com/watch?v=hylIXfZeB4c'),
(3, 'https://www.youtube.com/watch?v=Ljk6tGZ1l3A'),
(4, 'https://www.youtube.com/watch?v=Kv5RKsqVe-Y'),
(5, 'https://youtu.be/yCkl2Z3PBs0'),
(6, 'https://www.youtube.com/watch?v=Oqvly3MvlXA'),
(7, 'https://youtu.be/WuH9ahB-68Q'),
(8, 'https://youtu.be/o7rxKmWR-gc'),
(9, 'https://youtu.be/8R3Vcy5CaPc'),
(10, 'https://youtu.be/g3JUbgOHgdw');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'maneesh@gmail.com', 'Mani@123'),
(2, 'manu@gmail.com', 'Manu@123'),
(3, 'akshaya@gmail.com', 'Akshaya@123'),
(4, 'siri@gmail.com', 'Siri@123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posters`
--
ALTER TABLE `posters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trailer`
--
ALTER TABLE `trailer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `posters`
--
ALTER TABLE `posters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
