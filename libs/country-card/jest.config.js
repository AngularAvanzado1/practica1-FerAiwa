module.exports = {
  name: 'country-card',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/country-card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
