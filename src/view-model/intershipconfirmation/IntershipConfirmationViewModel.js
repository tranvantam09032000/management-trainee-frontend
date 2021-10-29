import ViewModel from '../viewModel'
export default class CertificateViewModel extends ViewModel {
  constructor() {
    super()
    this.fields = {
      studentId: null,
      taxCode: null,
      title: null,
      companyAddress: null,
      owner: null,
      manager: null,
      phoneNumber: null,
      website: null,
      companiesInterviewed: null,
      status: 'practiced',
    }
  }

  getValidations() {
   return {
      taxCode: {
        label: 'Mã số thuế',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      title: {
        label: 'Tên công ty',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      owner: {
        label: 'Chủ sở hữu',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      companyAddress: {
        label: 'Địa chỉ công ty',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      website: {
        label: 'Link công ty',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      manager: {
        label: 'Cán bộ hướng dẫn',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      phoneNumber: {
        label: 'Số điện thoại cán bộ hướng dẫn',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
      companiesInterviewed: {
        label: 'Công ty đã phỏng vấn',
        rules: {
          require: '',
          maxLength: {
            max_value: 200
          }
        }
      },
    }
  }
  isValid() {
    return super.isValid(this.getValidations())
  }
}