// Mass Delete Button
function checkBox(product) {
  let checkBoxes = $('.product #btn-check' + product)
  checkBoxes.attr('checked', !checkBoxes.attr('checked'))
  $('#product' + product).toggleClass('product-borderd')
}

$('#delete-product-btn').on('click', function () {
  $('#products_form').submit()
})

$('#products_form').on('submit', function (e) {
  if (!$('input[type=checkbox]').is(':checked')) {
    return false
  }
})

// Type Switcher
$('#productType').change(function () {
  let option = $('#productType').val()
  let dvd = $('#dvd-inputs')
  let book = $('#book-inputs')
  let furniture = $('#furniture-inputs')
  let title = $('#optionTitle')
  let sizeValue = $('#size')
  let weightValue = $('#weight')
  let heightValue = $('#height')
  let widthValue = $('#width')
  let lengthValue = $('#length')
  addTitle = title.removeClass('d-none')
  dvd.addClass('d-none')
  book.addClass('d-none')
  furniture.addClass('d-none')

  sizeValue.prop('required', false)
  weightValue.prop('required', false)
  heightValue.prop('required', false)
  widthValue.prop('required', false)
  lengthValue.prop('required', false)

  switch (option) {
    case 'DVD':
      addTitle
      title.text('Size')
      dvd.removeClass('d-none')
      sizeValue.prop('required', true)

      break
    case 'Book':
      addTitle
      title.text('Weight')
      book.removeClass('d-none')
      weightValue.prop('required', true)

      break
    case 'Furniture':
      addTitle
      title.text('Dimension')
      furniture.removeClass('d-none')
      heightValue.prop('required', true)
      widthValue.prop('required', true)
      lengthValue.prop('required', true)
      break
    default:
      title.addClass('d-none')
      break
  }
})

// Client-side validation
$(document).ready(function () {
  $('#product-form').submit(function (event) {
    event.preventDefault()

    let isValid = true

    let fields = [
      { id: 'sku', errorId: 'skuError', errorMessage: 'Field sku is required' },
      {
        id: 'name',
        errorId: 'nameError',
        errorMessage: 'Field name is required',
      },
      {
        id: 'price',
        errorId: 'priceError',
        errorMessage: 'Field price is required',
      },
      {
        id: 'productType',
        errorId: 'typeError',
        errorMessage:
          'Field type must have a valid type (DVD, Book, Furniture)',
      },
    ]
    fields.forEach(function (field) {
      let value = $('#' + field.id)
        .val()
        .trim()
      let fieldElement = $('#' + field.id)
      let errorElement = $('#' + field.errorId)

      if (value === '') {
        fieldElement.addClass('is-invalid')
        errorElement.text(field.errorMessage)
        isValid = false
      } else {
        fieldElement.removeClass('is-invalid')
        errorElement.text('')
      }
    })
    if (isValid) {
      this.submit()
    }
  })
})
