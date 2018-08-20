/*
 * InvoicePlane
 *
 * @package     InvoicePlane
 * @author      InvoicePlane Developers & Contributors
 * @copyright   Copyright (C) 2014 - 2018 InvoicePlane
 * @license     https://invoiceplane.com/license
 * @link        https://invoiceplane.com
 *
 * Based on FusionInvoice by Jesse Terry (FusionInvoice, LLC)
 */

$(document).ready(function () {

  // Enable tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Sidebar toggling
  $(document).on('click', '.sidebar-toggle', function (e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-visible');
  });

  // Fix for dropdowns inside table-responsive elements
  $(document).on('show.bs.dropdown', '.table-responsive', function () {
    $('.table-responsive').css('overflow', 'inherit');
  });

  $(document).on('hide.bs.dropdown', '.table-responsive', function () {
    $('.table-responsive').css('overflow', 'auto');
  });
});
