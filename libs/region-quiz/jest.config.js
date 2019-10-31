module.exports = {
  name: 'region-quiz',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/region-quiz',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
