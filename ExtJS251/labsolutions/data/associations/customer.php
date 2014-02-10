<?php
$customers = array(array(
        'id'=>1,
        'name'=>'Bread Barn',
        'phone'=>'(843) 365-2356'
    ), array(
        'id'=>2,
        'name'=>'Ice Cream Island',
        'phone'=>'(845) 389-7219'
    ), array(
        'id'=>3,
        'name'=>'Pizza Palace',
        'phone'=>'(937) 255-7d43'
    )
);

if (isset($_REQUEST['id'])) {
    $id = $_REQUEST['id'];
    foreach ($customers as &$customer) {
        if ($customer['id'] == $id) {
            echo json_encode($customer);
            break;
        }
    }
} else {
    echo json_encode($customers);
}
?>