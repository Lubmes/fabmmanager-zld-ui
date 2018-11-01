<template>
  <div id='fabmoment-form' class="m-5">

    <h3>Fabmoment</h3>
    <form class='mb-3'>
      <div class="form-group">
        <label>Titel</label><br>
        <input class='form-control-lg' placeholder="">
      </div>
      <div class="form-group">
        <label>Omschrijving</label>
        <textarea class="form-control" rows="5" placeholder=""></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Afbeeldingen</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
        <small id="" class="form-text text-muted">Upload ook eens een tekening van je ontwerp.</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Bestanden</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
        <small id="" class="form-text text-muted">Het digitale bronbestand van je werk (.obj, .pdf, ... ).</small>
      </div>

      <div class='row'>

        <div class='col'>  
          <h5>Ging makkelijk</h5>
          <div class='card p-3 mb-3'>
            <i class="fas fa-plus"></i>
            <input class='form-control' placeholder="">
            <small id="" class="form-text text-muted">één extra toe.</small>  
          </div>
        </div>
        <div class='col'>
          <h5>Ging moeilijk</h5>
          <div class='card p-3 mb-3'>
            <i class="fas fa-plus"></i>
            <input class='form-control' placeholder="">
            <small id="" class="form-text text-muted">Voeg één extra toe.</small>  
          </div>
        </div>

      </div>

      <h5>Bronnen</h5>
      <div class='card p-3 mb-3'>  
        <small id="" class="form-text text-muted mb-2">Voeg één extra toe.</small>  
        <div class="form-group">
          <label>Titel</label>
          <input class='form-control' placeholder="">
        </div>
        <div class="form-group">
          <label>Url</label>
          <input class='form-control' placeholder="">
        </div>
        <div class="form-group">
          <label>korte omschrijving</label>
          <input class='form-control' placeholder="">
        </div>
      </div>

      <div class='row'>

        <div class='col'>
      
          <h5>Programma's</h5>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              Photoshop
            </label><br>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              Illustrator
            </label><br>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              Tinkercad
            </label><br>
          </div><br>

        </div>

        <div class='col'>

          <h5>Machines</h5>
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
              Ultimaker 2
            </label><br>
          </div><br>

        </div>

        <div class='col'>

          <h5>Materialen</h5>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              PLA
            </label><br>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              Plexiglas
            </label><br>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input">
              Multiplex
            </label><br>
          </div><br>

        </div>
      
      </div>

      <div class="form-group mt-3">
        <label>Tag</label>
        <input class='form-control' placeholder="">
        <small id="" class="form-text text-muted">Geen leestekens, wel spaties.</small>
      </div>

      <fieldset class="form-group">
        <legend>Licenties</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1">
            Naamsvermelding
          </label>
        </div>
        <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
            Naamsvermelding gelijk delen
          </label>
        </div>
        <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3">
            Naamsvermelding niet commercieel
          </label>
        </div>
      </fieldset>

      <button type="submit" class="btn btn-primary mt-3">Opslaan</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .form-control-lg {
    width: 100%;
  }
</style>

