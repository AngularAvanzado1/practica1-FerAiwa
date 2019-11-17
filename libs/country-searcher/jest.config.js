module.exports = {
  name: 'country-searcher',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/country-searcher',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
