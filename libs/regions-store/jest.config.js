module.exports = {
  name: 'regions-store',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/regions-store',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
