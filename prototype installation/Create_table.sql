
CREATE TABLE `RecallReportItems` (
  `recall_number` text,
  `reason_for_recall` text,
  `status` text,
  `distribution_pattern` text,
  `product_quantity` text,
  `recall_initiation_date` date DEFAULT NULL,
  `state` text,
  `event_id` text,
  `product_type` text,
  `product_description` text,
  `recalling_firm` text,
  `report_date` date DEFAULT NULL,
  `voluntary_mandated` text,
  `classification` text,
  `code_info` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;