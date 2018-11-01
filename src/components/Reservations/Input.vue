<template>
  <div id='reservation-input' class='card mb-2 p-2 pt-3 pl-3 pr-3'>
    <div class="card-block">

      <!-- <h4 class="card-title">Reservering</h4> -->
          <form>
            <div class='text-center'>
              <button type="submit" class="btn btn-primary">Reserveer</button>
            </div>

            <div class='row'>
              <div class='col-md-3'>
                <div class="form-group">
                  <label>Begin</label>
                  
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="validationTooltipUsernamePrepend">
                        <i class="far fa-calendar-alt"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" id="validationTooltipUsername" placeholder="" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                      Please choose a unique and valid username.
                    </div>
                  </div>

                  <!-- <input class="form-control" rows="2" placeholder=""></input> -->
                </div>
                <div class="form-group">
                  <label>Einde</label>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="validationTooltipUsernamePrepend">
                        <i class="far fa-calendar-alt"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" id="validationTooltipUsername" placeholder="" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip">
                      Please choose a unique and valid username.
                    </div>
                  </div>

                    <!-- <input class="form-control" rows="2" placeholder=""></input> -->
                </div>
              </div>

              <div class='col-md-5'>
                <div class="form-group">
                  <label>Titel</label>
                  <input class='form-control' placeholder="Bijv. de naam van uw project...">
                </div>
                <div class="form-group">
                    <label>Omschrijving</label>
                    <textarea class="form-control" rows="2" placeholder="Hoe zou u uw werkzaamheden willen omschrijven?..."></textarea>
                </div>
              </div>

              <div class='col-md-4'>
                <h6>Welke machines denkt u nodig te hebben?</h6>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    Ultimaker 3
                  </label><br>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    Ultimaker 2+
                  </label><br>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    Ultimaker 2 no. 1
                  </label><br>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    Ultimaker 2 no. 2
                  </label><br>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    Lasersnijder
                  </label><br>
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input">
                    Vinylsnijder
                  </label><br>
                </div><br>
              </div>
            </div>

          </form>


    </div>
  </div>
</template>

<script>
export default {
}
</script>
