<?php
$orders = array(array(
        'id'=>1,
        'date'=>'2010-08-13',
        'customer_id'=>1
    ), array(
        'id'=>2,
        'date'=>'2010-07-14',
        'customer_id'=>1
    ), array(
        'id'=>3,
        'date'=>'2010-01-22',
        'customer_id'=>2
    ), array(
        'id'=>4,
        'date'=>'2010-11-06',
        'customer_id'=>2
    ), array(
        'id'=>5,
        'date'=>'2010-12-29',
        'customer_id'=>3
    ), array(
        'id'=>6,
        'date'=>'2010-03-03',
        'customer_id'=>3
    )
);

if (isset($_REQUEST['filter'])) {
    $data = array();
    $filter = $_REQUEST['filter'];
    $filter_array = json_decode($filter);
    $id = $filter_array[0]->value;
    foreach ($orders as &$order) {
        if ($order['customer_id'] == $id) {
            $data[] = $order;
        }
    }
    echo json_encode($data);
} else {
    echo json_encode($orders);
}
?>