<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\SportCourtRepository;

#[ApiResource]
#[ORM\Entity(repositoryClass: SportCourtRepository::class)]
class SportCourt
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $court_name = null;

    #[ORM\ManyToOne(inversedBy: 'sportCourts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Sport $sport = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getCourtName(): ?string
    {
        return $this->court_name;
    }

    public function setCourtName(string $court_name): static
    {
        $this->court_name = $court_name;

        return $this;
    }

    public function getSport(): ?Sport
    {
        return $this->sport;
    }

    public function setSport(?Sport $sport): static
    {
        $this->sport = $sport;

        return $this;
    }
}
