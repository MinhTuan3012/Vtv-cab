class TechsController {
  /** @ngInject */
  constructor($http, $log) {
    this.movieData = [];
    $http
      .get('http://mds.vtvcab.vn/metadata/delivery/GLOBAL/vod/editorials?filter={"voditem.nodeRefs":"LYS015391000","isVisible":true,"editorial.seriesRef":{"$in":[null,""]},"editorial.Rating.precedence":{"$lte":122},"locale":"vi_VN"}&limit=20&fields=["editorial.Title","editorial.Synopsis","editorial.Rating","editorial.Images","editorial.PromoImages","product.price","editorial.ProgramId","editorial.ServiceLongName","editorial.seriesRef","editorial.episodeNumber","editorial.Year","editorial.ProgrammeStartDate","editorial.ProgrammeEndDate","editorial.Studio","editorial.PrivateMetadata","editorial.Episode"]&sort=[["voditem.period.start",-1],["editorial.ProgrammeStartDate",-1]]')
      .then(response => {
        // this.techs = response.data;
        this.movieData = response.data.editorials;
        $log.log('movieData', this.movieData);
      });
    $log.log('container', angular.element('.movie-container'));
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};
