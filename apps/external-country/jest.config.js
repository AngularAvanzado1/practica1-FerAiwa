module.exports = {
  name: 'external-country',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/external-country',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
